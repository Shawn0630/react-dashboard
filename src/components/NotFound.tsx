import * as styles from "~styles/app.scss";
import Layout from "~components/Layout";
import * as React from "react";

export default class Notfound extends React.PureComponent {
    public render():JSX.Element { //tslint:disable-line
        return <Layout>
            <div className={styles.app}>
                <div className={styles.appHeader}>
                    <div className={styles.appLogo} />
                    <h2>Welcome to React-Dashboard</h2>
                </div>
            </div>
        </Layout>;
    }
}
