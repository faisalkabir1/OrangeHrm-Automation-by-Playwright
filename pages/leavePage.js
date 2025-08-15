
class LeavePage {
  constructor(page) {
    this.page = page;
    this.leaveMenu = 'a[href="/web/index.php/leave/viewLeaveModule"]';
    this.applyLeaveOption = 'a[href="/web/index.php/leave/applyLeave"]';
    this.leaveTypeDropdown = 'div.oxd-select-text';
    this.startDateInput = 'input[placeholder="yyyy-mm-dd"] >> nth=0';
    this.endDateInput = 'input[placeholder="yyyy-mm-dd"] >> nth=1';
    this.commentsTextarea = 'textarea[placeholder="Type here"]';
    this.applyButton = 'button:has-text("Apply")';
  }

  async navigateToApplyLeave() {
    await this.page.click(this.leaveMenu);
    await this.page.click(this.applyLeaveOption);
  }

  async applyLeave(leaveType, startDate, endDate, comments) {
    // Open leave type dropdown and select type
    await this.page.click(this.leaveTypeDropdown);
    await this.page.locator(`.oxd-select-option:has-text("${leaveType}")`).click();

    // Fill start date
    await this.page.fill(this.startDateInput, startDate);

    // Fill end date
    await this.page.fill(this.endDateInput, endDate);

    // Fill comments
    await this.page.fill(this.commentsTextarea, comments);

    // Click Apply
    await this.page.click(this.applyButton);
  }
}

export default LeavePage;
