class GameConsole {
    constructor() {
        this.consoleElement = document.getElementById('gameConsole');
        this.contentElement = this.consoleElement.querySelector('.console-content');
        this.messageHistory = [];
        this.maxMessages = 100; // Maximum number of messages to keep

        // Initialize clear button
        const clearBtn = this.consoleElement.querySelector('.control-btn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => this.clear());
        }
    }

    log(message, type = 'info') {
        const timestamp = new Date().toISOString().substr(11, 8);
        const messageElement = document.createElement('div');
        messageElement.className = `console-message ${type}`;
        messageElement.innerHTML = `<span class="timestamp">[${timestamp}]</span> ${message}`;

        this.contentElement.appendChild(messageElement);
        this.messageHistory.push({
            timestamp,
            message,
            type
        });

        // Trim history if it exceeds maximum length
        if (this.messageHistory.length > this.maxMessages) {
            this.messageHistory.shift();
            const firstChild = this.contentElement.firstChild;
            if (firstChild) {
                firstChild.remove();
            }
        }

        // Auto-scroll to bottom
        this.contentElement.scrollTop = this.contentElement.scrollHeight;
    }

    clear() {
        this.contentElement.innerHTML = '';
        this.messageHistory = [];
        this.log('Console cleared.', 'system');
    }

    error(message) {
        this.log(message, 'error');
    }

    warning(message) {
        this.log(message, 'warning');
    }

    success(message) {
        this.log(message, 'success');
    }

    system(message) {
        this.log(message, 'system');
    }
}

// Add some CSS for the console messages
const style = document.createElement('style');
style.textContent = `
    .console-message {
        margin: 2px 0;
        font-family: 'Courier New', Courier, monospace;
        color: var(--text-color);
    }

    .console-message .timestamp {
        color: rgba(51, 255, 51, 0.7);
    }

    .console-message.error {
        color: #ff4444;
    }

    .console-message.warning {
        color: #ffff44;
    }

    .console-message.success {
        color: #44ff44;
    }

    .console-message.system {
        color: #44ffff;
    }
`;
document.head.appendChild(style);