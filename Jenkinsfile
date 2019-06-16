pipeline {
  // agent {
  //  docker {
  //    image 'node'
  //  }
  // }
  agent any

  stages {
    stage('Build') {
      steps {
        sh 'docker build -t webmakersteve/myamtech-frontend:latest .'
      }
    }
    stage('Publish') {
      steps {
        sh 'docker push webmakersteve/myamtech-frontend:latest'
      }
    }
    stage('Deploy') {
      steps {
        sh 'kubectl apply -f packaging/manifest.yml'
      }
    }
  }
  post {
    always {
      sh 'docker rmi -f webmakersteve/myamtech-frontend:latest || exit 0'
    }
  }
}
