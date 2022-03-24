package io.ionic.starter;

import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin()
public class CustomNativePlugin extends Plugin {
    @PluginMethod()
    public void customCall(PluginCall call) {
        String message = call.getString("message");
        call.success();
    }

    @PluginMethod()
    public void customFunction(PluginCall call) {

        call.resolve();
    }
}
