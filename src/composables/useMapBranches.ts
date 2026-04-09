import { ref, computed } from 'vue';

export interface Branch {
  id: string;
  name: string;
  address: string;
  hours: string[];
  mapUrl: string;
}

export function useMapBranches(initialBranches: Branch[]) {
  const branches = ref<Branch[]>(initialBranches);
  const activeBranchId = ref<string>(initialBranches.length && initialBranches[0]?.id ? initialBranches[0].id : '');

  const activeBranch = computed(() => {
    return branches.value.find(b => b.id === activeBranchId.value) || branches.value[0];
  });

  const selectBranch = (id: string) => {
    activeBranchId.value = id;
  };

  return {
    branches,
    activeBranchId,
    activeBranch,
    selectBranch,
  };
}
