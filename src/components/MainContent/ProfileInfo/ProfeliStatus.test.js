import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfeliStatus";

describe("ProgileStatus component", () => {
    test("status from props should be in state", () => {
      const component = create(<ProfileStatus status="Putin Yeban!!!" />);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("Putin Yeban!!!");
    });

    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus status="Putin Yeban!!!" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("after creation input shouldn`t be displayed", () => {
      const component = create(<ProfileStatus status="Putin Yeban!!!" />);
      const root = component.root;
      expect(() => {
        let input = root.findByType("input");
      }).toThrow();
    });

    test("after creation span should be displayed with correct status", () => {
      const component = create(<ProfileStatus status="Putin Yeban!!!" />);
      const root = component.root;
      let span = root.findByType("span");
      expect(span.children[0]).toBe("Putin Yeban!!!");
    });

    test("input should be displayed instead of span", () => {
        const component = create(<ProfileStatus status="Putin Yeban!!!" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("Putin Yeban!!!");
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="Putin Yeban!!!" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deActivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});