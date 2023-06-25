import { create } from 'zustand';
import { TRepositorie } from '../types/Repositorie';
import useFetchRepos from '../queries/services/repos';
import { useEffect } from 'react';

type TSearchReposStore = {
  reposToScreen: TRepositorie[] | null;
  repos: TRepositorie[] | null;
  setRepos: (repos: TRepositorie[]) => void;
  searchRepos: (name: string) => void;
};

const useSearchReposStore = create<TSearchReposStore>((set) => ({
  reposToScreen: null,
  repos: null,

  setRepos: (repos: TRepositorie[]) => {
    set({
      repos,
      reposToScreen: repos
    });
  },

  searchRepos: (name: string) => {
    set((state) => ({
      reposToScreen:
        state.repos?.filter((repo) => {
          const repoNameTrated = repo.name.replace(/-/g, ' ').toLowerCase();
          return repoNameTrated.includes(name.toLowerCase());
        }) || null
    }));
  }
}));

const useSearchRepos = () => {
  const { reposToScreen, setRepos, searchRepos } = useSearchReposStore();
  const { data: reposData, isFetching } = useFetchRepos();

  useEffect(() => {
    if (reposData) {
      setRepos(reposData);
    }
  }, [reposData]);

  return { searchRepos, reposToScreen, isFetching };
};

export default useSearchRepos;
