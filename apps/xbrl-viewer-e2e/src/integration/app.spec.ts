import { getXBRLViewer } from '../support/app.po';

describe('xbrl-viewer', () => {
  beforeEach(() => cy.visit('/'));

  it('should display xbrl-viewer', () => {
    const parts = [
      new Blob([`<?xml version="1.0" encoding="UTF-8"?>`], {
        type: 'application/xml'
      })
    ];
    
    const file = new File(parts, 'sample.xml', {
      type: 'application/xml'
    });

    // Custom command example, see `../support/commands.ts` file
    cy.openXBRLFile(file);

    // Function helper example, see `../support/app.po.ts` file
    getXBRLViewer();
  });
});
