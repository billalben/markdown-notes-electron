import { cn, formatDateFromMs } from '@renderer/utils';
import { NoteInfo } from '@shared/models';
import { ComponentProps } from 'react';

export type NotePreviewProps = NoteInfo & {
  isActive?: boolean;
} & ComponentProps<'li'>;

export const NotePreview = ({ title, lastEditTime, isActive = false, className, ...props }: NotePreviewProps) => {
  const date = formatDateFromMs(lastEditTime);

  return (
    <li
      className={cn(
        'cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-75',
        { 'bg-zinc-400/75': isActive, 'hover:bg-zinc-500/75': !isActive },
        className
      )}
      {...props}
    >
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <span className="inline-block w-full mb-2 text-xs font-light text-left">{date}</span>
    </li>
  );
};

// <li key={note.title} onClick={onSelect} className="p-2 border-b border-zinc-400/50 hover:bg-zinc-600/50 transition-colors duration-100">
//   <h3 className="text-lg font-semibold">{note.title}</h3>
//   <p className="text-sm text-zinc-300">{note.lastEditTime}</p>
// </li>
