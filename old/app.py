from flask import Flask, render_template

app=Flask(__name__)

@app.route('/')
def root(): 
    markers=[{'lat': 33.645606, 'lon': -117.84303, 'popup': ''}]
    return render_template('index.html',markers=markers )

if __name__ == '__main__': 
    app.run(debug=True)