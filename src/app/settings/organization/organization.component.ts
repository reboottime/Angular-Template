import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, finalize, of } from 'rxjs';

import { AppState } from '@models/app-state.model';
import { User } from '@models/user.model';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrl: './organization.component.scss',
})
export class OrganizationComponent implements AfterViewInit {
  isLoadingOrganization: boolean = false;
  organization: Organization | null = null;
  organizationId: User['organizationId'] = '';

  constructor(private httpClient: HttpClient, private store: Store<AppState>) {
    this.store
      .select('auth')
      .subscribe(
        (data) => (this.organizationId = data.user?.organizationId ?? '')
      );
  }

  ngAfterViewInit(): void {
    if (!this.organizationId) return;

    this.fetchAndSetOrganization(this.organizationId);
  }

  // Naming convention on member methods that fetch and set component variable
  fetchAndSetOrganization(organizationId: User['organizationId']) {
    this.isLoadingOrganization = true;

    this.httpClient
      .get<Organization>(`/organization/${this.organizationId}`)
      .pipe(
        catchError(() => of(null)),
        // Example about turn off loading status
        finalize(() => (this.isLoadingOrganization = false))
      )
      .subscribe((data) => (this.organization = data));
  }
}

interface Organization {
  name: string;
  description: string;
  tier: string;
}
