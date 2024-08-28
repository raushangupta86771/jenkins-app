pipeline {
    agent any

    tools {
        nodejs "nodejs"
    }

    stages {
        stage('Install Packages') {
            steps {
                script {
                    sh 'yarn install'
                }
            }
        }

        stage('Run the App') {
            steps {
                script {
                    sh 'yarn start &'
                    sleep 5
                }
            }
        }

        stage('Visit /health route') {
            steps {
                script {
                    sh 'curl http://localhost:3000/health'
                }
            }
        }

        // Uncomment the cleanup stage if necessary
        // stage('Cleanup') {
        //     steps {
        //         script {
        //             sh 'pkill -f "node"'
        //         }
        //     }
        // }
    }
}
