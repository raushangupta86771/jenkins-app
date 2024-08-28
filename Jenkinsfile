pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/raushangupta86771/jenkins-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'yarn install'
            }
        }

        stage('Start Application') {
            steps {
                sh 'yarn start &'
            }
        }
    }
}
