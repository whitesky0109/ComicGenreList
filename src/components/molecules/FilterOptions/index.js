import FilterOption from './FilterOption';
import ContentsStateFilter from './ContentsStateFilter';
import FreedEpisodeSizeFilter from './FreedEpisodeSizeFilter';

const customFilterOptions = {
  freedEpisodeSize: FreedEpisodeSizeFilter,
  contentsState: ContentsStateFilter,
};

/** @returns {JSX.Element} */
export default function getOption(key) {
  return customFilterOptions[key] || FilterOption;
}
