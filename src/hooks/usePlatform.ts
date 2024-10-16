import platforms from '../data/platforms';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => {
  // return useData<Platform>('/platforms/lists/parents');
  return {
    data: platforms,
  };
};
export default usePlatform;
