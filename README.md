# Django-React

## Installation:

### 1. Install Django dependencies

```
$ cd server
```

```
$ pip install pipenv
```

```
$ pipenv shell
```

```
$ pipenv install
```

```
$ cd src
```

```
$ python manage.py makemigrations
```

```
$ python manage.py migrate
```

```
$ python manage.py createsuperuser
```

### 2. Install React dependencies and build

```
$ cd frontend/templates
```

```
$ npm install --unsafe-perm
```

```
$ npm run build
```

```
$ cd ../..
```

### 3. Prepare /static asset directory

```
$ python manage.py collectstatic
```

### 4. Run Django (serves react from /build)

```
$ python manage.py runserver 0.0.0.0:8000
```
