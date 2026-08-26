"use client";

import { ExamRunner } from "@/components/ExamRunner";
import { buildFullExam } from "@/lib/exam";

export default function TamDeneme() {
  return <ExamRunner kind="tam" title="Tam Deneme" minutes={60} build={buildFullExam} />;
}
