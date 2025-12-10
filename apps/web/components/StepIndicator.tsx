import { CheckCircle2, Circle } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
  steps: string[];
}

export default function StepIndicator({
  currentStep,
  steps,
}: StepIndicatorProps) {
  return (
    <div className='flex items-center justify-between max-w-2xl mx-auto mb-12'>
      {steps.map((step, index) => (
        <div key={index} className='flex items-center'>
          <div className='flex flex-col items-center'>
            {index + 1 < currentStep ? (
              <CheckCircle2 className='text-green-500 mb-2' size={32} />
            ) : index + 1 === currentStep ? (
              <Circle
                className='text-white mb-2 border-2 border-white'
                size={32}
              />
            ) : (
              <Circle className='text-gray-600 mb-2' size={32} />
            )}
            <span
              className={`text-sm font-medium ${
                index + 1 <= currentStep ? "text-white" : "text-gray-500"
              }`}
            >
              {step}
            </span>
          </div>

          {index < steps.length - 1 && (
            <div
              className={`h-1 w-20 mx-4 ${
                index + 1 < currentStep ? "bg-green-500" : "bg-gray-700"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}
