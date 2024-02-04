'use client';
import { ProgressLoader } from 'nextjs-progressloader';

export default function ProgressBar() {
    return <ProgressLoader height={7}  color='var(--fallback-s,oklch(var(--s)/var(--tw-bg-opacity)))' />;
}