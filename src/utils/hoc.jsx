import React from 'react';

/**
 * @param {JSX.Element} WrapperContainer
 * @param {JSX.Element} CustomComponent
 */
export const withContainer = (WrapperContainer, CustomComponent) => (
  function withComponent(hocProps) {
    return (
      <WrapperContainer
        {...hocProps}
        render={
          (props) => {
            const dumyProps = props;
            // props로 넘어오는 불필요하거나 중복 데이터 객체 제거
            delete dumyProps.render;
            delete dumyProps.props;
            delete dumyProps.state;
            delete dumyProps.updater;
            delete dumyProps._reactInternalFiber;
            delete dumyProps._reactInternalInstance;

            return (
              <CustomComponent {...dumyProps} />
            );
          }
        }
      />
    );
  }
);

/**
 * @param {JSX.Element[]} WrapperContainers
 * @param {JSX.Element} CustomComponent
 */
export const withContainers = (WrapperContainers, CustomComponent) => (
  WrapperContainers.reduceRight((component, WrapperContainer) => (
    withContainer(WrapperContainer, component)
  ), CustomComponent)
);
