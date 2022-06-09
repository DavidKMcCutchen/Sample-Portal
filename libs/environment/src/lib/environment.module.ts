import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SAMPLE_ENVIRONMENT } from './sample.token';
import { SampleEnvironment } from "./sample.model";


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: SampleEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: SAMPLE_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }
}
