import { connect } from 'react-redux';

import store from 'appStore';
import { fetchGetComic } from 'appStore/api/comicAPI';

import Container from 'utils/Container';

export class AppContainerClass extends Container {
  roleArtistFilter = ['writer', 'painter', 'scripter'];

  /** @type {import('components/organisms/Filter/Filter').FilterType[]} */
  filterOptions = [
    { disabled: true, target: 'contentsState', value: 'scheduled' },
    { disabled: true, target: 'contentsState', value: 'completed' },
    {
      disabled: true,
      target: 'freedEpisodeSize',
      value: 3,
      checkValidation: (option, comicItem) => (comicItem[option.target] >= option.value),
    },
  ];

  constructor(props) {
    super(props);

    const { genre } = this.props;
    store.dispatch(fetchGetComic({ genre }));
  }

  onScrollEnd = () => {
    const { hasNext, genre } = this.props;
    if (hasNext) {
      store.dispatch(fetchGetComic({ genre }));
    }
  };
}

AppContainerClass.defaultProps = {
  genre: 'romance',
};

const AppContainer = connect((state) => state.genre)(AppContainerClass);
export default AppContainer;
