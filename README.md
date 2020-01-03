# django-react

* Installation:

* Install Django dependencies
$ cd server
$ pip install pipenv
$ pipenv shell
$ pipenv install
$ cd src
$ python manage.py makemigrations
$ python manage.py migrate
$ python manage.py createsuperuser

* Install React dependencies and build
$ cd frontend/templates
$ npm install --unsafe-perm
$ npm run build
$ cd ../..

* Prepare /static asset directory
$ python manage.py collectstatic

* Run Django (serves react from /build)
$ python manage.py runserver 0.0.0.0:8000