import * as React from "react";
import * as styles from "~styles/shared.scss";

// tslint:disable-next-line:variable-name
const Loader: React.StatelessComponent = (): JSX.Element => {
    return <div className={styles.loaderContainer}>
        <div className={styles.loaderContent}>&nbsp;</div>
    </div>;
};

export {Loader};
