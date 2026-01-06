import { WorkflowStep } from '@/types/content';

interface StepTimelineProps {
  steps: WorkflowStep[];
}

export function StepTimeline({ steps }: StepTimelineProps) {
  return (
    <div className="relative">
      {/* Desktop: Horizontal Timeline */}
      <div className="hidden md:block">
        <div className="flex items-start justify-between gap-4">
          {steps.map((step, index) => (
            <div key={step.number} className="flex-1 relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute top-6 left-[calc(50%+24px)] right-0 h-0.5 bg-border" />
              )}
              
              {/* Step Circle */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-semibold text-lg mb-3">
                  {step.number}
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-2 text-center">
                  {step.name}
                </h3>
                <p className="text-sm text-text-secondary text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: Vertical Timeline */}
      <div className="md:hidden space-y-6">
        {steps.map((step, index) => (
          <div key={step.number} className="flex gap-4 relative">
            {/* Vertical Line */}
            {index < steps.length - 1 && (
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-border" />
            )}
            
            {/* Step Circle */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-semibold text-lg">
                {step.number}
              </div>
            </div>
            
            {/* Step Content */}
            <div className="flex-1 pt-1">
              <h3 className="text-base font-semibold text-text-primary mb-2">
                {step.name}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}






