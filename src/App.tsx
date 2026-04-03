/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Lesson from "./pages/Lesson";
import VocabTopics from "./pages/VocabTopics";
import VocabList from "./pages/VocabList";
import Quiz from "./pages/Quiz";
import Support from "./pages/Support";
import PastPapers from "./pages/PastPapers";
import Speedrun from "./pages/Speedrun";
import KanaTyper from "./pages/KanaTyper";
import FlashcardSprint from "./pages/FlashcardSprint";
import KanjiTrace from "./pages/KanjiTrace";
import KotobaGrind from "./pages/KotobaGrind";
import Hiragana from "./pages/Hiragana";
import Katakana from "./pages/Katakana";
import Radicals from "./pages/Radicals";
import N5 from "./pages/N5";
import N4 from "./pages/N4";
import N3 from "./pages/N3";
import N1 from "./pages/N1";
import N0 from "./pages/N0";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lesson/:type/:romaji" element={<Lesson />} />
          <Route path="hiragana" element={<Hiragana />} />
          <Route path="katakana" element={<Katakana />} />
          <Route path="vocabulary" element={<VocabTopics />} />
          <Route path="vocabulary/list" element={<VocabList />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="support" element={<Support />} />
          <Route path="past-papers" element={<PastPapers />} />
          <Route path="speedrun" element={<Speedrun />} />
          <Route path="kana-typer" element={<KanaTyper />} />
          <Route path="flashcard-sprint" element={<FlashcardSprint />} />
          <Route path="kanji-trace" element={<KanjiTrace />} />
          <Route path="kotoba-grind" element={<KotobaGrind />} />
          <Route path="n5" element={<N5 />} />
          <Route path="n4" element={<N4 />} />
          <Route path="n3" element={<N3 />} />
          <Route path="n2" element={<VocabTopics />} />
          <Route path="n1" element={<N1 />} />
          <Route path="n0" element={<N0 />} />
          {/* Fallback routes for demo links */}
          <Route path="grammar" element={<Home />} />
          <Route path="radicals" element={<Radicals />} />
          <Route path="courses" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
