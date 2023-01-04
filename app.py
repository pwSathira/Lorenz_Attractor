from flask import Flask, render_template

DEVELOPMENT_ENV  = True

app = Flask(__name__)

app_data = {
    "name":         "Lorenz Attractor",
    "description":  "A flask web application that uses ThreeJS to render a Lorenz Attractor",
    "author":       "Sathira Williams",
    "html_title":   "Lorenz Attractor Demo",
    "project_name": "Lorenz Attractor",
    "keywords":     "flask, webapp, template, basic"
}


@app.route('/')
def index():
    return render_template('index.html', app_data=app_data)


# @app.route('/about')
# def about():
#     return render_template('about.html', app_data=app_data)


# @app.route('/service')
# def service():
#     return render_template('service.html', app_data=app_data)

@app.route('/demo')
def demo():
    return render_template('demo.html', app_data=app_data)

@app.route('/contact')
def contact():
    return render_template('contact.html', app_data=app_data)


if __name__ == '__main__':
    app.run(debug=DEVELOPMENT_ENV)