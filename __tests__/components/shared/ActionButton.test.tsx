import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import ActionButton from "~components/shared/ActionButton";
import IconButton from "@material-ui/core/IconButton";

describe("components/shared/ActionButton", () => {
    test("shoule match snapshot when enabled", () => {
        const onClick: (data: {}) => void = jest.fn();
        const title: string = "test title";
        const data: string = "test data";
        const disabled: boolean = false;

        const wrapper: ShallowWrapper = shallow(
            <ActionButton data={data} title={title} disabled={disabled} onClick={onClick} icon="mode_edit" />
        );
        expect(wrapper).toMatchSnapshot();

        const iconButton: ShallowWrapper = wrapper.find(IconButton).first();
        iconButton.simulate("click", {
            stopPropagation: jest.fn()
        });
        expect(onClick).toHaveBeenCalledWith(data);
    });
});
