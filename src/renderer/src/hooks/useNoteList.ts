import { notesAtom, selectedNoteIndexAtom } from '@/store';
import { useAtom, useAtomValue } from 'jotai';

type UseNotesListParams = {
  onSelect?: () => void;
};

export const useNotesList = ({ onSelect }: UseNotesListParams) => {
  const notes = useAtomValue(notesAtom);

  const [selectedNoteIndex, setSelectedNoteIndex] = useAtom(selectedNoteIndexAtom);

  const handleNoteSelect = (index: number) => async () => {
    setSelectedNoteIndex(index);

    onSelect?.();
  };

  return {
    notes,
    selectedNoteIndex,
    handleNoteSelect
  };
};
