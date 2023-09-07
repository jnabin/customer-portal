import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
declare const $: any;
@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit{
  currentAmount!: any;
  donationsLists:any[] = [];
  durationTo = [
    {id: 1, name: 'Democratik', text: 'Democratik'}
  ];
  ridingMebership = [
      {id: 1, name: 'Democratik', text: 'Democratik'}
  ];
  periods = [
    {name: '1 Year', value: '1 year'}
  ];
  selectedPeriod: any = '1 year';
  color: ThemePalette = 'primary';
  checked = false;
  disabled = false;
  availableAdress = [
    {
        "label": "Alberta",
        "value": "AB"
    },
    {
        "label": "British Columbia",
        "value": "BC"
    },
    {
        "label": "Manitoba",
        "value": "MB"
    },
    {
        "label": "New Brunswick",
        "value": "NB"
    },
    {
        "label": "Newfoundland and Labrador",
        "value": "NL"
    },
    {
        "label": "Northwest Territories",
        "value": "NT"
    },
    {
        "label": "Nova Scotia",
        "value": "NS"
    },
    {
        "label": "Nunavut",
        "value": "NU"
    },
    {
        "label": "Ontario",
        "value": "ON"
    },
    {
        "label": "Prince Edward Island",
        "value": "PE"
    },
    {
        "label": "Quebec",
        "value": "QC"
    },
    {
        "label": "Saskatchewan",
        "value": "SK"
    },
    {
        "label": "Yukon Territory",
        "value": "YT"
    }
];
selectedCard = 'physical';
  constructor() {
  }

  ngOnInit(): void {
    
  }

  addOtherAmount(){
    if(!this.currentAmount || this.currentAmount == undefined) return;
    this.donationsLists.push({val: this.currentAmount, isActive: false});
    this.currentAmount = null;
  }

  selectDonationAmount(item:any){
    this.donationsLists.forEach(x => x.isActive = false);
    item.isActive = true;
  }

  toggleDonation(fromStep:any, toStep: any, stepId: any){
    let fromStepId = `donation_step_${fromStep}`;
    let toStepId = `donation_step_${toStep}`;
    let stepElement = document.getElementById(stepId);

    document.getElementById(fromStepId)?.classList.add('d-none');
    document.getElementById(toStepId)?.classList.remove('d-none');
    if(toStep == 3) {
        $( "#search_address" ).autocomplete({
            source: this.availableAdress
          });
    }
    if(toStep == 4) {
        $( "#search_address" ).autocomplete({
            source: this.availableAdress
          });

          let durationTODropdown = document.getElementById('dontingToDropdown');
          $(durationTODropdown).select2({ data: this.durationTo });

          let ridingMebershipDropdown = document.getElementById('ridingMembershipDropdown');
          $(ridingMebershipDropdown).select2({ data: this.ridingMebership });
    }
    let stepItems = document.getElementsByClassName("step-item");
    for(let u=0; u<stepItems.length; u++) {
        stepItems[u].classList.remove('current-step');
    }
    stepElement?.classList.add('current-step');
}
}
