import * as React from "react";
import * as styles from "./AppRoot.scss";
import { connect, SubscriptionAPI } from "dva";
import { GlobalState } from "../models/global";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

interface AppRootProps extends SubscriptionAPI {
    global: GlobalState;
}

@connect(({global}: {global: GlobalState}) => ({
    global
}))
export default class AppRoot extends React.PureComponent<AppRootProps> {
    constructor(props: AppRootProps) {
        super(props);

        this.handleErrorClose = this.handleErrorClose.bind(this);
    }

    public render(): JSX.Element {

       const errors: Error[] = this.props.global.errors;

       return <div>
           <Dialog
               open={errors.length > 0}
               onClose={this.handleErrorClose}
               aria-labelledby="error-dialog-title"
               aria-describedby="error-dialog-description"
           >
               <DialogTitle id="error-dialog-title">ERROR</DialogTitle>
               <DialogContent id="error-dialog-description">
                    {
                        errors.length > 0 ?
                        <div>
                            <span className={styles.errorMessage}>{errors[0].toString()}</span>
                        </div> : null
                    }
               </DialogContent>
               <DialogActions>
                   <Button onClick={this.handleErrorClose} color="primary">
                       OK
                    </Button>
               </DialogActions>
           </Dialog>
        </div>;
    }

    private handleErrorClose(): void {
        const errors: Error[] = this.props.global.errors;
        if (errors.length > 0) {
            this.props.dispatch({
                type: "global/removeError",
                payload: errors[0]
            });
        }
    }
}
