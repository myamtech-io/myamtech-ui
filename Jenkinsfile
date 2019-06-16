pipeline {
  // agent {
  //  docker {
  //    image 'node'
  //  }
  // }
  agent any

  stages {
    stage('Build Docker') {
      steps {
        sh 'docker build -t webmakersteve/myamtech-frontend:latest .'
      }
    }
    stage('Release Docker') {
      steps {
        sh 'docker push webmakersteve/myamtech-frontend:latest'
      }
    }
    stage('Deploy') {
      steps {
        sh 'kubectl apply -f packaging/manifest.yml'
      }
    }
    try {
      stage('Cleanup created artifacts') {
        steps {
          sh 'docker rmi webmakersteve/myamtech-frontend:latest'
        }
      }
    } catch (err) {
      echo "Could not clean up created artifacts"
    }
  }
}
