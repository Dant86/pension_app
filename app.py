from flask import Flask, render_template, request
from calculate import *

app = Flask(__name__)

@app.route('/')
def main_pg():
    return render_template('pension.html')

@app.route('/viz', methods=['POST'])
def visualize():
    if request.method == 'POST':
        age = float(request.form['age'])
        yrs_worked = float(request.form['years_worked'])
        sal = float(request.form['salary'])
        data_points = generate_pension_checkpoints(age, yrs_worked, sal)
        return render_template('viz.html', age=age, yrs_worked=yrs_worked, sal=sal, data=data_points)

if __name__ == '__main__':
    app.run(port=5000)
