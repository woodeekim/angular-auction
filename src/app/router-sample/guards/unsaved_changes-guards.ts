import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';

export class UnsavedChangesGuards implements CanDeactivate<any>{
  canDeactivate() {
    return window.confirm('저장하지 않고 떠나시겠습니까?');
  }

}
