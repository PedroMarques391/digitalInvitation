"use client"
import React, { useState } from 'react'


export interface IStepsProps {
    labels: string[]
    children: any
    allowNextStep?: boolean[]
    labelFinalAction: string
    action: () => void
}

enum STEPS {
    FIRST_STEP = 0,
    SECOND_STEP = 1,
    THIRD_STEP = 2
}

const Steps = ({ labels, children, action, labelFinalAction, allowNextStep }: IStepsProps): React.JSX.Element => {
    const [currentStep, setCurrentStep] = useState<STEPS>(STEPS.FIRST_STEP)

    function noPreviousStep(): boolean {
        return currentStep === STEPS.FIRST_STEP
    }

    function noNextStep(): boolean {
        return currentStep === labels.length - 1
    }

    function previousStep() {
        if (noPreviousStep()) return
        setCurrentStep(currentStep - 1)
    }

    function nextStep() {
        if (noNextStep()) return
        setCurrentStep(currentStep + 1)
    }

    function renderLabels() {
        return (
            <div className='flex gap-4 select-none'>
                {labels.map((item, index) => {
                    const isSelected = currentStep === index
                    return (
                        <div key={index} className='flex items-center gap-2'>
                            <span className={`flex justify-center items-center w-9 h-9 rounded-full ${isSelected ? "bg-white text-black" : "bg-zinc-700 text-zinc-400"}`}>{index + 1}</span>
                            <span className={isSelected ? "text-white" : "text-zinc-400"}>{item}</span>
                        </div>
                    )
                })}
            </div>
        )
    }

    const allowStep = allowNextStep?.[currentStep] ?? true

    return (
        <div className='flex-1 flex flex-col gap-10 w-full'>
            <div className='self-center'>{renderLabels()}</div>
            <div>{children[currentStep]}</div>
            <div className=' flex justify-between '>
                <button
                    onClick={previousStep}
                    disabled={noPreviousStep()}
                    className={`button 
                    ${noPreviousStep()
                            ? "bg-zing-400 cursor-not-allowed opacity-50"
                            : "bg-zing-700 hover:bg-zing-600 text-white"}`}
                >
                    <span>Anterior</span>
                </button>
                {!noNextStep() ? (
                    <button
                        onClick={nextStep}
                        disabled={!allowStep || noNextStep()}
                        className={
                            `button 
                            ${!allowStep || noNextStep()
                                ? "bg-green-400 cursor-not-allowed opacity-50"
                                : "bg-green-700 hover:bg-green-600 text-white"}`
                        }

                    >
                        <span>Próximo</span>
                    </button>
                ) : (
                    <button
                        onClick={action}
                        disabled={!allowStep}
                        className={`button ${!allowStep
                            ? "bg-green-400 cursor-not-allowed opacity-50"
                            : "bg-green-700 hover:bg-green-600 text-white"}
                        }`}

                    >
                        <span>{labelFinalAction}</span>
                    </button>
                )}
            </div>
        </div>
    )
}

export default Steps