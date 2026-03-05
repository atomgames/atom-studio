from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/save_the_rocket')
def save_the_rocket():
    return render_template('save_the_rocket.html')

@app.route('/doomsday')
def doomsday():
    return render_template('doomsday.html')

@app.route('/record_expense')
def record_expense():
    return render_template('record_expense.html')

if __name__ == '__main__':
    app.run(debug=True)
