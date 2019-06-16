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
        sh 'docker build -t webmakersteve/myamtech/frontend:latest .'
      }
    }
    stage('Release Docker') {
      steps {
        sh 'docker push webmakersteve/myamtech/frontend:latest'
      }
    }
    stage('Deploy') {
      steps {
        sh 'echo nothing to do yet'
      }
    }
  }
}
