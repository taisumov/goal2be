import create from 'zustand'

const useStore = create((set) => ({
    uuidRegistry: '',
    setUuidRegistry: (value: string) => set((state: { uuidRegistry: string }) => ({ ...state, uuidRegistry: value })),
    isLoading: false,
}))

export default useStore