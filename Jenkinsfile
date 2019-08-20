@Library('webmakersteve') _

publishedImages = [
  "webmakersteve/myamtech-frontend"
]

pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        withVersion {
          script {
            dockerHelper.build(this, publishedImages)
          }
        }
      }
    }
    stage('Publish') {
      when {
        branch 'master'  //only run these steps on the master branch
      }

      steps {
        withVersion {
          script {
            dockerHelper.publish(this, publishedImages)
          }
        }
      }
    }
    stage('Deploy') {
      when {
        branch 'master'
      }
      steps {
        withVersion {
          sh 'cat packaging/manifest.yml | sed "s/{{COMMIT_HASH}}/${VERSION:-local}/g" | kubectl apply -f -'
        }
      }
    }
  }
  post {
    always {
      archiveArtifacts artifacts: 'deployment.properties,', fingerprint: true
      withVersion {
        script {
          dockerHelper.clean(this, publishedImages)
        }
      }
    }
  }
}
