import React from 'react';
import { connect } from 'react-redux';
import localForage from 'localforage';

import {
  updateAvailableSaves,
  addSave,
  editSave,
  removeSave,
} from '../store/actionCreators/savedSettings';
import {
  updateTotalTime,
  updateIntroTime,
  updateOutroTime,
} from '../store/actionCreators/time';
import {
  updateTotalPages,
  updateStartPages,
} from '../store/actionCreators/pages';

import TotalTime from './time/TotalTime';
import FineTuneTime from './time/FineTuneTime';
import TotalPages from './pages/TotalPages';
import Modal from './Modal';

const mapStateToProps = (state) => ({
  availableSaves: state.savedSettings,
  totalTime: state.time.total,
  introTime: state.time.intro,
  outroTime: state.time.outro,
  totalPages: state.pages.total,
  startPages: state.pages.start,
});

const mapDispatchToProps = {
  updateAvailableSaves,
  addSave,
  editSave,
  removeSave,
  updateTotalTime,
  updateIntroTime,
  updateOutroTime,
  updateTotalPages,
  updateStartPages,
};

class SetupSection extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      showFineTuneSection: false,
      showTotalTimePages: false,
      showTotalTimeHelp: false,
      showStartHelp: false,
      showEndHelp: false,
      showSavePanel: false,
      saveNameInput: '',
      showLoadPanel: false,
    };

    this.savedSettingsKey = 'savedSettings';

    this.toggleFineTuneSection = this.toggleFineTuneSection.bind(this);
  }

  toggleFineTuneSection () {
    const { showFineTuneSection } = this.state;
    this.setState({ showFineTuneSection: !showFineTuneSection });
  }

  getCurrentSetupSaveObject (name) {
    return {
      name,
      time: Object.assign({}, this.props.totalTime),
      intro: Object.assign({}, this.props.introTime),
      outro: Object.assign({}, this.props.outroTime),
      pages: {
        total: this.props.totalPages,
        start: this.props.startPages,
      },
      saved: Date.now(),
    };
  }

  saveCurrentSetup () {
    const name = this.state.saveNameInput.trim();

    const settingsObject = this.getCurrentSetupSaveObject(name);
    const currentSaves = this.props.availableSaves.filter(save => save.name !== settingsObject.name);
    
    const availableSaves = [settingsObject, ...currentSaves].sort((a, b) => {
      if (a.saved === b.saved) return 0;
      return a.saved > b.saved ? -1 : 1;
    });
    
    localForage.setItem(this.savedSettingsKey, availableSaves).then(value => {
      console.log(value);
      this.updateAvailableSaves(value);
      this.setState({
        showSavePanel: false,
        saveNameInput: '',
      });
    }).catch(err => {
      console.error(err);
    });
  }

  loadAvailableSaves () {
    localForage.getItem(this.savedSettingsKey).then(value => {
      if (value !== null) {
        console.log(value);
        this.updateAvailableSaves(value);
      }
    })
    .catch(err => console.error(err))
    .finally(() => this.setState({ showLoadPanel: true }));
  }

  loadSpecificSave (index) {
    const save = this.props.availableSaves[index];

    this.props.updateTotalTime(Object.assign({}, save.time));
    this.props.updateIntroTime(Object.assign({}, save.intro));
    this.props.updateOutroTime(Object.assign({}, save.outro));
    this.props.updateTotalPages(save.pages.total);
    this.props.updateStartPages(save.pages.start);

    this.setState({ showLoadPanel: false });
  }

  removeSpecificSave (index) {
    const confirmText = 'Are you sure you want to delete this saved book setup information?';
    if (confirm(confirmText)) {
      this.props.removeSave(index);
      localForage.setItem(this.savedSettingsKey, this.props.availableSaves).then(value => {
        console.log(value);
      }).catch(err => console.error(err));
    }
  }
  
  render () {
    return <section className="container-fluid">
      <nav className="nav nav-pills" style={{ marginBottom: '10px' }}>
        <li className="nav-item">
          <button className="btn btn-outline-dark btn-sm" onClick={() => this.setState({ showSavePanel: true })}>
            Save Setup
          </button>
        </li>
        <li className="nav-item">
          <button className="btn btn-outline-dark btn-sm" onClick={() => this.setState({ showLoadPanel: true })}>
            Load Setup
          </button>
        </li>
      </nav>
      <TotalPages
        helpIsShown={this.state.showTotalPagesHelp}
        showHelp={() => this.setState({ showTotalPagesHelp: true })}
        hideHelp={() => this.setState({ showTotalPagesHelp: false })}
      />
      <TotalTime
        helpIsShown={this.state.showTotalTimeHelp}
        showHelp={() => this.setState({ showTotalTimeHelp: true })}
        hideHelp={() => this.setState({ showTotalTimeHelp: false })}
      />
      <FineTuneTime
        isShown={this.state.showFineTuneSection}
        toggle={this.toggleFineTuneSection}
        startHelpIsShown={this.state.showStartHelp}
        showStartHelp={() => this.setState({ showStartHelp: true })}
        hideStartHelp={() => this.setState({ showStartHelp: false })}
        endHelpIsShown={this.state.showEndHelp}
        showEndHelp={() => this.setState({ showEndHelp: true })}
        hideEndHelp={() => this.setState({ showEndHelp: false })}
      />
      {this.state.showLoadPanel && (
        <Modal
          title="Load Previous Setup"
          hide={() => this.setState({ showLoadPanel: false })}>
          {
            this.props.availableSaves.length < 1
            ? <p>No Setups Saved.</p>
            : <table className="table">
              <thead>
                <tr>
                  <th scope="col">Saved Name</th>
                  <th scope="col">Saved Date</th>
                  <th></th>
                </tr>
              </thead>
              {this.props.availableSaves.map((save, index) => {
                const date = new Date(save.saved);
                const dateString = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
                return <tr>
                  <td>
                    <a onClick={() => this.loadSpecificSave(index)} style={{ display: 'block', width: '100%', height: '100%'}}>
                      {save.name}
                    </a>
                  </td>
                  <td>
                    {dateString}
                  </td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => this.removeSpecificSave(index)}>
                      Delete?
                    </button>
                  </td>
                </tr>
              })}
            </table>
          }
        </Modal>
      )}
      {this.state.showSavePanel && (
        <Modal
          title="Save Current Setup"
          hide={() => this.setState({ showSavePanel: false })}>
          <p>
            Save the current setup fields to your browser to load next time you visit!
          </p>
          
          <div className="form-group">
            <label htmlFor="saveName">Save Name</label>
            <input id="saveName" className="form-control"
              placeholder="Book Name" aria-describedby="saveNameHelp"
              value={this.state.saveNameInput} onChange={event => this.setState({ saveNameInput: event.target.value })}
            />
            <small id="saveNameHelp" className="form-text text-muted">
              If you enter the same name as a previously-saved setup, it will <strong>overwrite</strong> the old one.
            </small>
          </div>

          <p className="alert alert-warning">
            <em>Please note that this saves the settings to your browser's "Local Storage", which means that it will
            be permanently deleted if you clear your browser's content cache!</em>
          </p>
        </Modal>
      )}
    </section>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetupSection);