import Container from 'utils/Container';
import debounce from 'utils/debounce';

export default class GenreListContainer extends Container {
  state = {};

  constructor(props) {
    super(props);
    [
      'data',
    ].forEach((key) => {
      Object.assign(this.state, this.setChangeProp2State([key]));
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { props, state } = this;
    const changeProps = [
      // props
      prevProps.data !== props.data && 'data',

      // state
      prevState.filterOptions !== state.filterOptions && 'filterOptions',
    ].filter((str) => str);

    if (changeProps.length) {
      this.setState(this.setChangeProp2State(changeProps));
    }
  }

  /** @param {string[]} changeProps */
  setChangeProp2State = (changeProps) => changeProps.reduce((acc, propName) => {
    switch (propName) {
      case 'filterOptions':
      case 'data': {
        let { data } = this.props;
        const { filterOptions } = this.state;

        if (filterOptions) {
          const defaultCheckValidation = (option, { [option.target]: target }) => (
            target === option.value
          );

          data = data.filter((item) => (
            filterOptions.reduce((valid, option) => {
              if (option.disabled === true) {
                return valid;
              }

              const checkValidation = option.checkValidation || defaultCheckValidation;
              return valid && checkValidation(option, item);
            }, true)
          ));
        }
        Object.assign(acc, { data });
        break;
      }

      default:
    }

    return acc;
  }, {});

  /** @param {FilterType[]} filterOptions */
  onClickFilter = (filterOptions) => {
    this.setState({ filterOptions });
  };

  onScrollThumbnails = debounce((event) => {
    /** @type {HTMLDivElement} */
    const element = event.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      const { onScrollEnd, data } = this.props;
      // do something at end of scroll
      onScrollEnd(data);
    }
  }, 200);
}

GenreListContainer.defaultProps = {
  data: [],
  filterOptions: [],

  loading: false,
  onScrollEnd: () => { },
};

/**
@typedef {import('components/organisms/Filter/Filter').FilterType} FilterType
 */
