pipeline {
    agent any

    tools {
        nodejs 'nodejs'  // Ensure this matches the Node.js tool name configured in Jenkins
    }

    stages {
        stage('Install Packages') {
            steps {
                script {
                    sh 'yarn install'
                }
            }
        }

        stage('Start the App') {
            steps {
                script {
                    // Start the application and background it
                    sh 'nohup yarn start &'
                    // Wait for the application to start
                    sleep 10
                }
            }
        }

        stage('Verify App is Running') {
            steps {
                script {
                    // Check if the app is accessible
                    def response = sh(script: 'curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/health', returnStdout: true).trim()
                    if (response != '200') {
                        error "App is not accessible. HTTP status code: ${response}"
                    } else {
                        echo "App is running and accessible."
                    }
                }
            }
        }

        stage('Cleanup') {
            steps {
                script {
                    // Stop the application
                    sh 'pkill -f "node" || true'
                }
            }
        }
    }
}
