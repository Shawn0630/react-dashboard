import * as React from "react";
import * as styles from "./DenovoColoredSequence.scss";
import { com } from "~models/example";
import IAbbreviatedModification = com.example.dto.IAbbreviatedModification;

interface SequenceWithColor {
    seq: string;
    color: string;
}

interface ColoredSequenceProps {
    threshold: number;
    candidate: string;
    positionalConfidence: number[];
    modifications: IAbbreviatedModification[];
    residues: {[name: string]: number};
}

class DenovoColoredSequence extends React.PureComponent<ColoredSequenceProps> {
    public render(): JSX.Element {
        const colorSequence: SequenceWithColor[] = this.generateSequence(this.props.candidate, this.props.positionalConfidence);
        return <div title={colorSequence.map(s => s.seq).join()}>
            {colorSequence.map((sequence, index) => (
                <span key={index} className={sequence.color}>{sequence.seq}</span>
            ))}
        </div>;
    }
    private generateSequence(sequence: string, positionalConfidence: number[]): SequenceWithColor[] {
        const threshold: number = Math.round(this.props.threshold);
        const colorSequence: SequenceWithColor[] = [];
        let index: number = 0;
        let modiIndex: number = 0;
        for (let i: number = 0; i < sequence.length;) {
            if (Math.round(positionalConfidence[index] * 100) < threshold) {
                let mass: number = this.props.residues[sequence[i]];
                if (i + 1 < sequence.length && sequence[i + 1].toLowerCase() === sequence[i + 1].toUpperCase()) {
                    mass += this.props.modifications[modiIndex].monoMass;
                    modiIndex += 1;
                }
                while (i + 1 < sequence.length && sequence[i + 1].toLowerCase() === sequence[i + 1].toUpperCase()) {
                    i += 1;
                }
                i += 1;
                index += 1;
                while (index < positionalConfidence.length && Math.round(positionalConfidence[index] * 100) < threshold) {
                    mass += this.props.residues[sequence[i]];
                    if (i + 1 < sequence.length && sequence[i + 1].toLowerCase() === sequence[i + 1].toUpperCase()) {
                        mass += this.props.modifications[modiIndex].monoMass;
                        modiIndex += 1;
                    }
                    while (i + 1 < sequence.length && sequence[i + 1].toLowerCase() === sequence[i + 1].toUpperCase()) {
                        i += 1;
                    }
                    i += 1;
                    index += 1;
                }
                colorSequence.push({
                    seq: `[${mass.toFixed(1)}]`,
                    color: styles.letterGrey
                });
            } else if (positionalConfidence[index] > 0.9) {
                const curSeq: string = this.getCurrentSeq(i, sequence);
                colorSequence.push({
                    seq: curSeq,
                    color: styles.letterRed
                });
                i += curSeq.length;
                index += 1;
            } else if (positionalConfidence[index] > 0.8) {
                const curSeq: string = this.getCurrentSeq(i, sequence);
                colorSequence.push({
                    seq: curSeq,
                    color: styles.letterPurple
                });
                i += curSeq.length;
                index += 1;
            } else if (positionalConfidence[index] > 0.6) {
                const curSeq: string = this.getCurrentSeq(i, sequence);
                colorSequence.push({
                    seq: curSeq,
                    color: styles.letterBlue
                });
                i += curSeq.length;
                index += 1;
            } else {
                const curSeq: string = this.getCurrentSeq(i, sequence);
                colorSequence.push({
                    seq: curSeq,
                    color: styles.letterBlack
                });
                i += curSeq.length;
                index += 1;
            }
        }

        return colorSequence;
    }
    private getCurrentSeq(start: number, seq: string): string {
        let i: number = start;
        let curSeq: string = seq[start];
        while (i + 1 < seq.length && seq[i + 1].toLowerCase() === seq[i + 1].toUpperCase()) {
            i += 1;
            curSeq = curSeq + seq[i];
        }

        return curSeq;
    }
}

export {DenovoColoredSequence as ColoredSequence, ColoredSequenceProps};
