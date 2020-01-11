'''
    Eligibility constraints and base pension
    taken from https://www.meabf.org/annuity-calculator
'''

def eligible(age, yrs_working):
    if age >= 60:
        return yrs_working >= 10
    if age >= 55 and age <= 59:
        return yrs_working >= 20
    if age >= 50 and age <= 54:
        return yrs_working >= 30
    return False

def year_of_eligibility(age, yrs_working):
    yr = 2020
    while not eligible(age, yrs_working):
        age += 1
        yrs_working += 1
        yr += 1
    return age, yrs_working, yr

def multiplier(age, yrs_working):
    if age >= 60 and yrs_working >= 25:
        return 1
    if age >= 56:
        return 1 - ((60 - age) * .03)
    return .85

def calculate_base(age, yrs_working, fy_sal):
    mult = multiplier(age, yrs_working)
    x = fy_sal / 12.0
    y = yrs_working * .024
    prod = mult * x * y
    if prod * 12.0 > fy_sal * .8:
        prod = fy_sal * .8 / 12.0
    return prod * 12

def adjustment_by_yr(base, year):
    payable = base
    if year >= 2042:
        payable = .65 * base
    cpi = .975 * base
    hfpt = .925 * base
    opt = .85 * base
    return payable, cpi, hfpt, opt

def generate_pension_checkpoints(age, yrs_working, sal):
    # travserse until year of eligibility
    age, yrs_working, year = year_of_eligibility(age, yrs_working)
    points = []
    for incr in range(30):
        base_pension = calculate_base(age, yrs_working, sal)
        adjustments = adjustment_by_yr(base_pension, year)
        points.append((year, adjustments))
        year += 1
        age += 1
    return points










