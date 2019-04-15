import * as React from "react";
import { ResultState } from "~dva/result";
import { connect, SubscriptionAPI } from "dva";
import { SharedType } from "~/models/types";
import { PageRequest } from "~/dva/IndexedDbService";
import { com } from "~models/example";

interface DenovoPageProps extends SubscriptionAPI {}
interface DenovoPageStates {}

@connect(({result}: {result: ResultState}) => ({
    result
}))
export default class DenovoPage extends React.PureComponent<DenovoPageProps, DenovoPageStates> {

    constructor(props: DenovoPageProps) {
        super(props);
    }

    public componentDidMount(): void {
        const { dispatch } = this.props;
        const request: PageRequest = {
            type: SharedType.ResultType.DENOVOS,
            page: 1
        };
        dispatch({
            type: "result/getResultPage",
            payload: request
        });
    }

    public render(): JSX.Element {
        return <React.Fragment>
        </React.Fragment>;
    }
}
