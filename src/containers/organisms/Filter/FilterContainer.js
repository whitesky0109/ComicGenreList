import Container from 'utils/Container';

export default class FilterContainer extends Container {
  /** @param {React.SyntheticEvent} event */
  onClickItem = (option) => (event) => {
    const { onClick, filterOptions } = this.props;

    /** @type {HTMLDivElement} */
    const element = event.currentTarget;
    /** @type {FilterType} */
    const target = filterOptions.find((item) => item === option);

    const disabled = element.getAttribute('disabled') === null;

    /** @type {FilterType[]} */
    const nextFilterOptions = filterOptions.map(
      /** @param {FilterType} filter */
      (filter) => {
        if (filter === target) {
          return {
            ...filter,
            disabled,
          };
        }

        if (target.target === filter.target && disabled === false) {
          return {
            ...filter,
            disabled: true,
          };
        }

        return {
          ...filter,
        };
      },
    );

    onClick(nextFilterOptions);
  };
}

/** @typedef {import('components/organisms/Filter/Filter').FilterType} FilterType */
