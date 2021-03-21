import React from 'react';
import styles from './App.module.css';
import { Button, Card, Intent } from '@blueprintjs/core';

const Project = ({ imageUrl, projectName, projectLink, projectDescription }: any) => {
  const gotoLink = (link: string) => {
    const win = window.open(link, '_blank')
    win?.focus()
  }
  
  return (
    <div className={styles.projectCardContainer}>
      <div>
        <img alt={projectName} src={imageUrl} />
      </div>
      <div className={styles.projectDetailContainer}>
        <p>
          {projectDescription}
        </p>
        <Button
          minimal={true}
          large={true}
          outlined={true}
          onClick={() => gotoLink(projectLink)}
          intent={Intent.SUCCESS}>
          Learn More
        </Button>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className={styles.App}>
      <Card>
        <section>
          <h2>Otzaf &mdash; a technology company</h2>
          <p>
            Hello, World! Welcome to the home of Otzaf - a small technology company
            with a focus on productivity &amp; organisational tools.
          </p>
        </section>
      </Card>
      <Card>
        <section>
          <Project
            projectName={'Muban Finance'}
            imageUrl={'https://muban.app/images/demo-as-of-2021-02-23.png'}
            projectLink={'https://muban.app'}
            projectDescription={
              <>
                <span className={styles.projectName}>Muban Finance</span> is a web application for managing your personal &amp; business finances.
              </>
            }
          />
        </section>
      </Card>
    </div>
  );
}

export default App;
