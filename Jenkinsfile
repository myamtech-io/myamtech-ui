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
      when {
        branch 'master'
      }
      steps {
        sh 'cat packaging/manifest.yml | sed "s/{{COMMIT_HASH}}/${GIT_COMMIT:-local}/g" | kubectl apply -f -'
      }
    }
  }
  post {
    always {
      sh 'docker rmi -f webmakersteve/myamtech-frontend:latest || exit 0'
    }
  }
}
