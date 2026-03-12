all: build

build:
	cd api && make && cd ..
	cd taskpanel && make && cd ..
	cd adminpanel && make && cd ..
	cd reportpanel && make && cd ..
