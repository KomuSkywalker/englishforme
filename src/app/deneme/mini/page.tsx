"use client";

import { ExamRunner } from "@/components/ExamRunner";
import { buildMiniExam } from "@/lib/exam";

export default function MiniDeneme() {
  return <ExamRunner kind="mini" title="Mini Deneme" minutes={20} build={buildMiniExam} />;
}
