"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var NewAppScreen_1 = require("react-native/Libraries/NewAppScreen");
var App = function () {
    return (<>
      <react_native_1.StatusBar barStyle="dark-content"/>
      <react_native_1.SafeAreaView>
        <react_native_1.ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <NewAppScreen_1.Header />
          {(<react_native_1.View style={styles.engine}>
              <react_native_1.Text style={styles.footer}>Engine: Hermes</react_native_1.Text>
            </react_native_1.View>)}
          <react_native_1.View style={styles.body}>
            <react_native_1.View style={styles.sectionContainer}>
              <react_native_1.Text style={styles.sectionTitle}>Step One</react_native_1.Text>
              <react_native_1.Text style={styles.sectionDescription}>
                Edit <react_native_1.Text style={styles.highlight}>App.js</react_native_1.Text> to change this
                screen and then come back to see your edits.
              </react_native_1.Text>
            </react_native_1.View>
            <react_native_1.View style={styles.sectionContainer}>
              <react_native_1.Text style={styles.sectionTitle}>See Your Changes</react_native_1.Text>
              <react_native_1.Text style={styles.sectionDescription}>
                <NewAppScreen_1.ReloadInstructions />
              </react_native_1.Text>
            </react_native_1.View>
            <react_native_1.View style={styles.sectionContainer}>
              <react_native_1.Text style={styles.sectionTitle}>Debug</react_native_1.Text>
              <react_native_1.Text style={styles.sectionDescription}>
                <NewAppScreen_1.DebugInstructions />
              </react_native_1.Text>
            </react_native_1.View>
            <react_native_1.View style={styles.sectionContainer}>
              <react_native_1.Text style={styles.sectionTitle}>Learn More</react_native_1.Text>
              <react_native_1.Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </react_native_1.Text>
            </react_native_1.View>
            <NewAppScreen_1.LearnMoreLinks />
          </react_native_1.View>
        </react_native_1.ScrollView>
      </react_native_1.SafeAreaView>
    </>);
};
var styles = react_native_1.StyleSheet.create({
    scrollView: {
        backgroundColor: NewAppScreen_1.Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: NewAppScreen_1.Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: NewAppScreen_1.Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: NewAppScreen_1.Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: NewAppScreen_1.Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});
exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2tvdXRpbHlhL0Rvd25sb2Fkcy9jb2RlcXVhbGl0eS9jb2RlcXVhbGl0eS9BcHAudHN4IiwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7Ozs7O0FBRUgsZ0RBQTBCO0FBQzFCLDZDQU9zQjtBQUV0QixvRUFNNkM7QUFFN0MsSUFBTSxHQUFHLEdBQUc7SUFDVixPQUFPLENBQ0wsRUFDRTtNQUFBLENBQUMsd0JBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUNsQztNQUFBLENBQUMsMkJBQVksQ0FDWDtRQUFBLENBQUMseUJBQVUsQ0FDVCw4QkFBOEIsQ0FBQyxXQUFXLENBQzFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FDekI7VUFBQSxDQUFDLHFCQUFNLENBQUMsQUFBRCxFQUNQO1VBQUEsQ0FBQyxDQUNDLENBQUMsbUJBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQ3pCO2NBQUEsQ0FBQyxtQkFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLEVBQUUsbUJBQUksQ0FDbEQ7WUFBQSxFQUFFLG1CQUFJLENBQUMsQ0FDUixDQUNEO1VBQUEsQ0FBQyxtQkFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FDdkI7WUFBQSxDQUFDLG1CQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQ25DO2NBQUEsQ0FBQyxtQkFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLEVBQUUsbUJBQUksQ0FDaEQ7Y0FBQSxDQUFDLG1CQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQ3JDO3FCQUFLLENBQUMsbUJBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLG1CQUFJLENBQUU7O2NBRXBELEVBQUUsbUJBQUksQ0FDUjtZQUFBLEVBQUUsbUJBQUksQ0FDTjtZQUFBLENBQUMsbUJBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FDbkM7Y0FBQSxDQUFDLG1CQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLGdCQUFnQixFQUFFLG1CQUFJLENBQ3hEO2NBQUEsQ0FBQyxtQkFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUNyQztnQkFBQSxDQUFDLGlDQUFrQixDQUFDLEFBQUQsRUFDckI7Y0FBQSxFQUFFLG1CQUFJLENBQ1I7WUFBQSxFQUFFLG1CQUFJLENBQ047WUFBQSxDQUFDLG1CQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQ25DO2NBQUEsQ0FBQyxtQkFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLEVBQUUsbUJBQUksQ0FDN0M7Y0FBQSxDQUFDLG1CQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQ3JDO2dCQUFBLENBQUMsZ0NBQWlCLENBQUMsQUFBRCxFQUNwQjtjQUFBLEVBQUUsbUJBQUksQ0FDUjtZQUFBLEVBQUUsbUJBQUksQ0FDTjtZQUFBLENBQUMsbUJBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FDbkM7Y0FBQSxDQUFDLG1CQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsRUFBRSxtQkFBSSxDQUNsRDtjQUFBLENBQUMsbUJBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FDckM7O2NBQ0YsRUFBRSxtQkFBSSxDQUNSO1lBQUEsRUFBRSxtQkFBSSxDQUNOO1lBQUEsQ0FBQyw2QkFBYyxDQUFDLEFBQUQsRUFDakI7VUFBQSxFQUFFLG1CQUFJLENBQ1I7UUFBQSxFQUFFLHlCQUFVLENBQ2Q7TUFBQSxFQUFFLDJCQUFZLENBQ2hCO0lBQUEsR0FBRyxDQUNKLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixJQUFNLE1BQU0sR0FBRyx5QkFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQixVQUFVLEVBQUU7UUFDVixlQUFlLEVBQUUscUJBQU0sQ0FBQyxPQUFPO0tBQ2hDO0lBQ0QsTUFBTSxFQUFFO1FBQ04sUUFBUSxFQUFFLFVBQVU7UUFDcEIsS0FBSyxFQUFFLENBQUM7S0FDVDtJQUNELElBQUksRUFBRTtRQUNKLGVBQWUsRUFBRSxxQkFBTSxDQUFDLEtBQUs7S0FDOUI7SUFDRCxnQkFBZ0IsRUFBRTtRQUNoQixTQUFTLEVBQUUsRUFBRTtRQUNiLGlCQUFpQixFQUFFLEVBQUU7S0FDdEI7SUFDRCxZQUFZLEVBQUU7UUFDWixRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLEtBQUssRUFBRSxxQkFBTSxDQUFDLEtBQUs7S0FDcEI7SUFDRCxrQkFBa0IsRUFBRTtRQUNsQixTQUFTLEVBQUUsQ0FBQztRQUNaLFFBQVEsRUFBRSxFQUFFO1FBQ1osVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFLHFCQUFNLENBQUMsSUFBSTtLQUNuQjtJQUNELFNBQVMsRUFBRTtRQUNULFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsTUFBTSxFQUFFO1FBQ04sS0FBSyxFQUFFLHFCQUFNLENBQUMsSUFBSTtRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLE9BQU8sRUFBRSxDQUFDO1FBQ1YsWUFBWSxFQUFFLEVBQUU7UUFDaEIsU0FBUyxFQUFFLE9BQU87S0FDbkI7Q0FDRixDQUFDLENBQUM7QUFFSCxrQkFBZSxHQUFHLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2tvdXRpbHlhL0Rvd25sb2Fkcy9jb2RlcXVhbGl0eS9jb2RlcXVhbGl0eS9BcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU2FtcGxlIFJlYWN0IE5hdGl2ZSBBcHBcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmVcbiAqXG4gKiBAZm9ybWF0XG4gKiBAZmxvd1xuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBTYWZlQXJlYVZpZXcsXG4gIFN0eWxlU2hlZXQsXG4gIFNjcm9sbFZpZXcsXG4gIFZpZXcsXG4gIFRleHQsXG4gIFN0YXR1c0Jhcixcbn0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuaW1wb3J0IHtcbiAgSGVhZGVyLFxuICBMZWFybk1vcmVMaW5rcyxcbiAgQ29sb3JzLFxuICBEZWJ1Z0luc3RydWN0aW9ucyxcbiAgUmVsb2FkSW5zdHJ1Y3Rpb25zLFxufSBmcm9tICdyZWFjdC1uYXRpdmUvTGlicmFyaWVzL05ld0FwcFNjcmVlbic7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFN0YXR1c0JhciBiYXJTdHlsZT1cImRhcmstY29udGVudFwiIC8+XG4gICAgICA8U2FmZUFyZWFWaWV3PlxuICAgICAgICA8U2Nyb2xsVmlld1xuICAgICAgICAgIGNvbnRlbnRJbnNldEFkanVzdG1lbnRCZWhhdmlvcj1cImF1dG9tYXRpY1wiXG4gICAgICAgICAgc3R5bGU9e3N0eWxlcy5zY3JvbGxWaWV3fT5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgeyhcbiAgICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuZW5naW5lfT5cbiAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5mb290ZXJ9PkVuZ2luZTogSGVybWVzPC9UZXh0PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5ib2R5fT5cbiAgICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRpdGxlfT5TdGVwIE9uZTwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uRGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIEVkaXQgPFRleHQgc3R5bGU9e3N0eWxlcy5oaWdobGlnaHR9PkFwcC5qczwvVGV4dD4gdG8gY2hhbmdlIHRoaXNcbiAgICAgICAgICAgICAgICBzY3JlZW4gYW5kIHRoZW4gY29tZSBiYWNrIHRvIHNlZSB5b3VyIGVkaXRzLlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJ9PlxuICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UaXRsZX0+U2VlIFlvdXIgQ2hhbmdlczwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uRGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIDxSZWxvYWRJbnN0cnVjdGlvbnMgLz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGl0bGV9PkRlYnVnPC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25EZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICAgICAgPERlYnVnSW5zdHJ1Y3Rpb25zIC8+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRpdGxlfT5MZWFybiBNb3JlPC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25EZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICAgICAgUmVhZCB0aGUgZG9jcyB0byBkaXNjb3ZlciB3aGF0IHRvIGRvIG5leHQ6XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDxMZWFybk1vcmVMaW5rcyAvPlxuICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC9TY3JvbGxWaWV3PlxuICAgICAgPC9TYWZlQXJlYVZpZXc+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIHNjcm9sbFZpZXc6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IENvbG9ycy5saWdodGVyLFxuICB9LFxuICBlbmdpbmU6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICByaWdodDogMCxcbiAgfSxcbiAgYm9keToge1xuICAgIGJhY2tncm91bmRDb2xvcjogQ29sb3JzLndoaXRlLFxuICB9LFxuICBzZWN0aW9uQ29udGFpbmVyOiB7XG4gICAgbWFyZ2luVG9wOiAzMixcbiAgICBwYWRkaW5nSG9yaXpvbnRhbDogMjQsXG4gIH0sXG4gIHNlY3Rpb25UaXRsZToge1xuICAgIGZvbnRTaXplOiAyNCxcbiAgICBmb250V2VpZ2h0OiAnNjAwJyxcbiAgICBjb2xvcjogQ29sb3JzLmJsYWNrLFxuICB9LFxuICBzZWN0aW9uRGVzY3JpcHRpb246IHtcbiAgICBtYXJnaW5Ub3A6IDgsXG4gICAgZm9udFNpemU6IDE4LFxuICAgIGZvbnRXZWlnaHQ6ICc0MDAnLFxuICAgIGNvbG9yOiBDb2xvcnMuZGFyayxcbiAgfSxcbiAgaGlnaGxpZ2h0OiB7XG4gICAgZm9udFdlaWdodDogJzcwMCcsXG4gIH0sXG4gIGZvb3Rlcjoge1xuICAgIGNvbG9yOiBDb2xvcnMuZGFyayxcbiAgICBmb250U2l6ZTogMTIsXG4gICAgZm9udFdlaWdodDogJzYwMCcsXG4gICAgcGFkZGluZzogNCxcbiAgICBwYWRkaW5nUmlnaHQ6IDEyLFxuICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwidmVyc2lvbiI6M30=