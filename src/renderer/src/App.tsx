import { useRef } from 'react';
import { ActionButtonsRow, Content, DraggableTopBar, FloatingNoteTitle, MarkdownEditor, NotePreviewList, RootLayout, Sidebar } from './components';

function App() {
  const contentContainerRef = useRef<HTMLDivElement>(null);

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0);
  };

  return (
    <>
      <DraggableTopBar />
      <RootLayout className="bg-zinc-900/50 backdrop-blur-sm ">
        <Sidebar className="no-scrollbar">
          <ActionButtonsRow className="p-2 flex justify-between sticky top-0 bg-zinc-900/50 backdrop-blur-sm z-10 " />
          <NotePreviewList className="mt-3 space-y-1" onSelect={resetScroll} />
        </Sidebar>

        <Content ref={contentContainerRef} className="border-l bg-zinc-900/50 border-l-white/20 no-scrollbar">
          <FloatingNoteTitle className="pt-2" />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  );
}

export default App;
