![react-top-modal](https://res.cloudinary.com/dlpyn3wxf/image/upload/v1637856109/TopModal-2_rkzitk.png)
[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![Maintainability](https://api.codeclimate.com/v1/badges/3e054716a72e537b3bf4/maintainability)](https://codeclimate.com/github/ZinedineMess/react-top-modal/maintainability)

## Get started
### Prerequisites for install
- You need [Git](https://git-scm.com) to clone the repository
- You need [Node](https://nodejs.org/en/) (v16.10.0) to run the npm commands

### Dependencies
* [@testing-library/jest-dom](https://github.com/testing-library/jest-dom#installation): v5.15.0, 
* [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/): v11.2.7, 
* [@testing-library/react-hooks](https://www.npmjs.com/package/@testing-library/react-hooks): v7.0.2,
* [@testing-library/user-event](https://www.npmjs.com/package/@testing-library/user-event): v12.8.3,
* [@wojtekmaj/enzyme-adapter-react-17](https://www.npmjs.com/package/@wojtekmaj/enzyme-adapter-react-17): v0.6.5,
* [prop-types](https://www.npmjs.com/package/prop-types): v15.7.2,
* [react](https://reactjs.org): v17.0.2,
* [react-dom](https://www.npmjs.com/package/react-dom): v17.0.2,
* [react-icons](https://www.npmjs.com/package/react-icons): v4.3.1,
* [react-scripts](https://www.npmjs.com/package/react-scripts): v4.0.3,
* [react-test-renderer](https://www.npmjs.com/package/react-test-renderer): v17.0.2,

### Installation
* using NPM 
`npm install react-top-modal `
* using yarn
`yarn install react-top-modal`

### Features
* Modal portal
* Close the modal with Esc key,
* Close the modal on click overlay,
* Add or not a close Icon to close modal,
* Customize className,
* Add or not a footer Button to close modal,
* Add or not a spinner before the modal displays

### Props
| Props | Type | Required? | Default | Description |
| :--------------- |:---------------:| :---------------:| :---------------:| -----:|
| isOpen | Object | Yes | - | If true, display the modal, otherwise remove the modal |
| showModal | Bool | Yes | False | State allows you to display the modal |
| activeModal | String | Yes | - | Add a string to identify which modal should be opened |
| Close | Function | Yes | - | Function allows you to remove the modal |
| addCloseEscape | Bool | No | False | Allows to add the functionality of modal closure using the 'Esc' key |
| addCloseOverlay | Bool | No | False | Allows to add the functionality of modal closing by clicking on the overlay |
| addCloseIcon | Bool | No | True | Allows to add or not the modal closing icon |
| customClassName | String | No | - | Allows you to customize the class name of each element |
| addFooterButton | Bool | No | False | Allows to add or not a button present in the footer of the modal |
| spinner | Bool | No | False | Allows to add or not a spinner during the loading of the modal |

## How to use 
### import modal and useModal
``` php
import {Modal, useModal} from 'react-top-modal';
```

### useModal
``` php
const { showModal, activeModal, handleOpenModal, handleCloseModal } = useModal();
```

### Button
``` php
<button type='button' className='buttonDefault' onClick={() => handleOpenModal('classic')}>Modal (classic Modal)</button>
```

### Modal
```
<Modal isOpen={ showModal && activeModal === 'classic' } close={handleCloseModal}>
	<h2>classic</h2>
</Modal>
```

![Modal](https://res.cloudinary.com/dlpyn3wxf/image/upload/v1637850942/Capture_d_%C3%A9cran_2021-11-25_%C3%A0_15.33.41_nlbbbw.png)

### add Close Esc
```
<button type='button' className='buttonDefault' onClick={() => handleOpenModal('closeEscape')}>
    Modal (with closeEscape)
</button>
<Modal isOpen={ showModal && activeModal === 'closeEscape' } close={handleCloseModal} addCloseEscape={true}>
    <h2>closeEscape</h2>
</Modal>
```

### add Close Overlay
```
<button type='button' className='buttonDefault' onClick={() => handleOpenModal('closeOverlay')}>
    Modal (with closeOverlay)
</button>
<Modal isOpen={ showModal && activeModal === 'closeOverlay' } close={handleCloseModal} addCloseOverlay={true}>
    <h2>closeOverlay</h2>
</Modal>
```

### add footerButton
```
<button type='button' className='buttonDefault' onClick={() => handleOpenModal('footerButton')}>
    Modal (with footerButton)
</button>
<Modal isOpen={ showModal && activeModal === 'footerButton' } close={handleCloseModal} addFooterButton={true} addCloseIcon={false}>
    <h2>footerButton</h2>
</Modal>
```

![footerButton](https://res.cloudinary.com/dlpyn3wxf/image/upload/v1637850942/Capture_d_%C3%A9cran_2021-11-25_%C3%A0_15.34.02_fumcqb.png)

### Customize className
```
<button type='button' className='buttonDefault' onClick={() => handleOpenModal('customClassName')}>
    Modal (with customClassName)
</button>
<Modal isOpen={ showModal && activeModal === 'customClassName' } close={handleCloseModal} customClassName='custom'>
    <h2>customClassName</h2>
</Modal>
```

### add Spinner
```
<button type='button' className='buttonDefault' onClick={spinnerTimer}>
    Modal (with spinner 1s)
</button>
<Modal isOpen={ showModal && activeModal === 'spinner' } close={handleCloseModal} spinner={isLoading}>
    <h2>spinner</h2>
</Modal>
```

![spinner](https://res.cloudinary.com/dlpyn3wxf/image/upload/v1637850942/Capture_d_%C3%A9cran_2021-11-25_%C3%A0_15.34.26_b8fect.png)

## Auteur   
* [Zinédine MESSAHEL](https://github.com/ZinedineMess)   
